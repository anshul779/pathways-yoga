(function(){
  "use strict";

  var state = {
    level: "beginner",
    openPoseId: null,
    favorites: new Set(),
    viewed: new Set(),
    completedByLevel: {
      beginner: new Set(),
      intermediate: new Set(),
      advanced: new Set()
    }
  };

  var tileGrid = document.getElementById("tileGrid");
  var routineTitle = document.getElementById("routineTitle");
  var routineBlurb = document.getElementById("routineBlurb");
  var overlay = document.getElementById("overlay");
  var detailPanel = document.getElementById("detailPanel");
  var progressFill = document.getElementById("progressFill");
  var progressPct = document.getElementById("progressPct");
  var progressBar = document.getElementById("progressBar");
  var completionModal = document.getElementById("completionModal");

  function posesForLevel(level){
    return POSES.filter(function(p){ return p.level === level; })
                .sort(function(a,b){ return a.order - b.order; });
  }

  function updateProgress(){
    var pct = Math.round((state.viewed.size / POSES.length) * 100);
    progressFill.style.width = pct + "%";
    progressPct.textContent = pct + "%";
    progressBar.setAttribute("aria-valuenow", pct);
  }

  function renderTabs(){
    ["beginner","intermediate","advanced"].forEach(function(lvl){
      var tab = document.getElementById("tab-" + lvl);
      var active = lvl === state.level;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.querySelector("span").textContent =
        state.completedByLevel[lvl].size + " / " + LEVEL_META[lvl].count + " completed";
    });
  }

  function renderRoutineContext(){
    var meta = LEVEL_META[state.level];
    routineTitle.textContent = meta.label + " Routine — " + meta.count + " poses";
    routineBlurb.textContent = meta.blurb;
  }

  function favIcon(isFav){
    return isFav ? "&#9829;" : "&#9825;";
  }

  function renderTiles(){
    var list = posesForLevel(state.level);
    tileGrid.innerHTML = "";
    list.forEach(function(pose){
      var tile = document.createElement("button");
      tile.className = "tile";
      tile.setAttribute("data-pose-id", pose.id);
      tile.setAttribute("aria-label", "Open details for " + pose.name);

      var isFav = state.favorites.has(pose.id);

      tile.innerHTML =
        '<div class="tile-img"><img src="' + IMAGES[pose.id] + '" alt="' + pose.name + ' yoga pose" loading="lazy"></div>' +
        '<button class="fav-btn ' + (isFav ? "is-fav" : "") + '" data-fav-id="' + pose.id + '" aria-label="' +
          (isFav ? "Remove " + pose.name + " from favorites" : "Save " + pose.name) + '" aria-pressed="' + isFav + '">' + favIcon(isFav) + '</button>' +
        '<div class="tile-body">' +
          '<div><span class="tile-num">0' + pose.order + ' / 0' + LEVEL_META[state.level].count + '</span><span class="tile-name">' + pose.name + '</span></div>' +
          '<span class="tile-arrow" aria-hidden="true">&#8594;</span>' +
        '</div>';

      tile.addEventListener("click", function(e){
        if (e.target.closest(".fav-btn")) return;
        openDetail(pose.id);
      });

      tileGrid.appendChild(tile);
    });

    // wire favorite buttons (event delegation would also work, but grid rebuilds each time)
    tileGrid.querySelectorAll(".fav-btn").forEach(function(btn){
      btn.addEventListener("click", function(e){
        e.stopPropagation();
        toggleFav(btn.getAttribute("data-fav-id"));
      });
    });
  }

  function toggleFav(id){
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    renderTiles();
    if (state.openPoseId === id) renderDetailFav();
  }

  function renderDetailFav(){
    var favBtn = document.getElementById("favDetail");
    var isFav = state.favorites.has(state.openPoseId);
    favBtn.innerHTML = favIcon(isFav);
    favBtn.classList.toggle("is-fav", isFav);
    favBtn.setAttribute("aria-pressed", isFav);
  }

  function setLevel(level){
    state.level = level;
    renderTabs();
    renderRoutineContext();
    renderTiles();
  }

  function openDetail(poseId){
    var pose = POSES.find(function(p){ return p.id === poseId; });
    if (!pose) return;
    state.openPoseId = poseId;
    state.viewed.add(poseId);
    updateProgress();

    var levelList = posesForLevel(pose.level);
    var idx = levelList.findIndex(function(p){ return p.id === poseId; });

    document.getElementById("detailImg").src = IMAGES[pose.id];
    document.getElementById("detailImg").alt = pose.name + " yoga pose";
    document.getElementById("detailLevelTag").textContent = LEVEL_META[pose.level].label;
    document.getElementById("detailTitle").textContent = pose.name;
    document.getElementById("detailTagline").textContent = pose.tagline;
    document.getElementById("detailPosition").textContent =
      String(idx + 1).padStart(2,"0") + " / " + String(levelList.length).padStart(2,"0");
    document.getElementById("detailHold").textContent = pose.hold;

    var musclesEl = document.getElementById("detailMuscles");
    musclesEl.innerHTML = "";
    pose.muscles.forEach(function(m){
      var tag = document.createElement("span");
      tag.className = "muscle-tag";
      tag.textContent = m;
      musclesEl.appendChild(tag);
    });

    var stepsEl = document.getElementById("detailSteps");
    stepsEl.innerHTML = "";
    pose.steps.forEach(function(s){
      var li = document.createElement("li");
      li.textContent = s;
      stepsEl.appendChild(li);
    });

    renderDetailFav();

    document.getElementById("prevPose").disabled = idx <= 0;
    var nextButton = document.getElementById("nextPose");
    var isLastPose = idx >= levelList.length - 1;
    nextButton.disabled = false;
    nextButton.classList.toggle("is-completion", isLastPose);
    nextButton.textContent = isLastPose ? "Complete " + LEVEL_META[pose.level].label : "Next \u2192";

    overlay.classList.add("open");
    detailPanel.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("detailPanel").scrollTop = 0;
    var scrollEl = document.querySelector(".detail-scroll");
    if (scrollEl) scrollEl.scrollTop = 0;

    document.getElementById("closeDetail").focus();
  }

  function closeDetail(){
    overlay.classList.remove("open");
    detailPanel.classList.remove("open");
    document.body.style.overflow = "";
    state.openPoseId = null;
  }

  function showCompletion(pose){
    var nextLevel = pose.level === "beginner" ? "intermediate" :
      pose.level === "intermediate" ? "advanced" : null;
    state.completedByLevel[pose.level].add(pose.id);
    renderTabs();
    document.getElementById("completionLevel").textContent = LEVEL_META[pose.level].label + " Level Completed";
    document.getElementById("completionMessage").textContent =
      "You've successfully completed all " + LEVEL_META[pose.level].label + " yoga activities.";
    var completionAction = document.getElementById("completionAction");
    completionAction.textContent = nextLevel ? "Next \u2192 " + LEVEL_META[nextLevel].label : "Done";
    completionAction.setAttribute("data-next-level", nextLevel || "");
    completionModal.classList.add("open");
    completionModal.setAttribute("aria-hidden", "false");
    completionAction.focus();
  }

  function closeCompletion(){
    completionModal.classList.remove("open");
    completionModal.setAttribute("aria-hidden", "true");
  }

  function finishActivity(){
    var pose = POSES.find(function(p){ return p.id === state.openPoseId; });
    if (!pose) return;
    var levelList = posesForLevel(pose.level);
    var idx = levelList.findIndex(function(p){ return p.id === pose.id; });
    if (idx === levelList.length - 1) showCompletion(pose);
    else stepPose(1);
  }

  function goToNextLevel(){
    var nextLevel = document.getElementById("completionAction").getAttribute("data-next-level");
    closeCompletion();
    closeDetail();
    if (!nextLevel) return;
    setLevel(nextLevel);
    document.querySelector(".level-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function stepPose(direction){
    var pose = POSES.find(function(p){ return p.id === state.openPoseId; });
    if (!pose) return;
    var levelList = posesForLevel(pose.level);
    var idx = levelList.findIndex(function(p){ return p.id === pose.id; });
    var nextIdx = idx + direction;
    if (nextIdx < 0 || nextIdx >= levelList.length) return;
    openDetail(levelList[nextIdx].id);
  }

  // ---- wire events ----
  document.querySelectorAll(".level-tab").forEach(function(tab){
    tab.addEventListener("click", function(){ setLevel(tab.getAttribute("data-level")); });
  });

  document.getElementById("closeDetail").addEventListener("click", closeDetail);
  overlay.addEventListener("click", closeDetail);
  document.getElementById("prevPose").addEventListener("click", function(){ stepPose(-1); });
  document.getElementById("nextPose").addEventListener("click", finishActivity);
  document.getElementById("completionAction").addEventListener("click", goToNextLevel);
  document.getElementById("favDetail").addEventListener("click", function(){
    if (state.openPoseId) toggleFav(state.openPoseId);
  });

  document.addEventListener("keydown", function(e){
    if (completionModal.classList.contains("open")) {
      if (e.key === "Escape") closeCompletion();
      return;
    }
    if (!detailPanel.classList.contains("open")) return;
    if (e.key === "Escape") closeDetail();
    if (e.key === "ArrowLeft") stepPose(-1);
    if (e.key === "ArrowRight") stepPose(1);
  });

  document.getElementById("backToTop").addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---- init ----
  renderTabs();
  renderRoutineContext();
  renderTiles();
  updateProgress();
})();
