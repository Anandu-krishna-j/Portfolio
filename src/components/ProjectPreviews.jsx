import React from 'react';

/**
 * ProjectPreviews: Rich, realistic, modern UI preview mockups
 * for each verified project in the resume.
 */

export const ProjectPreview = ({ projectId, title }) => {
  switch (projectId) {
    case 'ameneye':
      return (
        <div className="preview-container preview-ameneye" aria-hidden="true">
          <div className="preview-chrome">
            <span className="live-feed-badge">
              <span className="recording-dot"></span> LIVE FEED
            </span>
            <span className="cam-label">CAM 04 • LOBBY_NORTH</span>
            <span className="timecode-display">00:14:32:18</span>
          </div>

          <div className="preview-video-viewport">
            {/* Viewport grid lines */}
            <div className="cam-crosshair"></div>
            <div className="cam-bounding-box cam-box-1">
              <span className="box-tag">STREAM ACTIVE</span>
            </div>

            {/* Simulated playback controls */}
            <div className="video-scrubber-bar">
              <div className="scrubber-progress"></div>
              <div className="scrubber-marker marker-1"></div>
              <div className="scrubber-marker marker-2"></div>
            </div>

            <div className="video-bottom-controls">
              <div className="control-icons-group">
                <span className="ctrl-btn play-icon">▶</span>
                <span className="ctrl-btn volume-icon">🔊</span>
                <span className="ctrl-time">14:32 / 45:00</span>
              </div>
              <div className="cam-grid-thumbs">
                <span className="thumb active">C1</span>
                <span className="thumb">C2</span>
                <span className="thumb">C3</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'kswmp':
      return (
        <div className="preview-container preview-kswmp" aria-hidden="true">
          <div className="preview-chrome">
            <span className="portal-badge">KSWMP PORTAL</span>
            <span className="region-tag">TRIVANDRUM MUNICIPALITY</span>
            <span className="status-green-dot">ACTIVE</span>
          </div>

          <div className="kswmp-body">
            <div className="kswmp-stats-row">
              <div className="kswmp-stat-pill">
                <span className="stat-num">84.6%</span>
                <span className="stat-sub">Target Completed</span>
              </div>
              <div className="kswmp-stat-pill">
                <span className="stat-num">142T</span>
                <span className="stat-sub">Tonnage Cleared</span>
              </div>
            </div>

            {/* Mini SVG analytics chart */}
            <div className="kswmp-chart-shell">
              <svg viewBox="0 0 280 60" className="kswmp-svg-chart">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0,50 Q 40,20 80,35 T 160,15 T 240,25 T 280,10 L 280,60 L 0,60 Z" fill="url(#chartGrad)" />
                <path d="M 0,50 Q 40,20 80,35 T 160,15 T 240,25 T 280,10" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <circle cx="280" cy="10" r="4" fill="#34d399" />
              </svg>
            </div>

            <div className="kswmp-route-strip">
              <span className="route-zone">Sector 07</span>
              <div className="route-progress-bar">
                <div className="route-fill" style={{ width: '84%' }}></div>
              </div>
              <span className="route-percent">84%</span>
            </div>
          </div>
        </div>
      );

    case 'surveillance-ai':
      return (
        <div className="preview-container preview-surveillance-ai" aria-hidden="true">
          <div className="preview-chrome">
            <span className="ai-model-tag">SURVEILLANCE AI v2.4</span>
            <span className="fps-counter">60 FPS • 12ms</span>
          </div>

          <div className="ai-viewport">
            {/* AI detection bounding boxes */}
            <div className="ai-box ai-box-person">
              <div className="ai-box-label">PERSON #104 [CONF: 98.4%]</div>
            </div>
            <div className="ai-box ai-box-vehicle">
              <div className="ai-box-label">VEHICLE #22 [CONF: 99.1%]</div>
            </div>

            {/* AI HUD overlay */}
            <div className="ai-hud-lines"></div>

            {/* Live event logs */}
            <div className="ai-event-banner">
              <span className="alert-ping-dot"></span>
              <span className="alert-text">EVENT: Perimeter Motion Verified</span>
              <span className="alert-time">JUST NOW</span>
            </div>
          </div>
        </div>
      );

    case 'hrms':
      return (
        <div className="preview-container preview-hrms" aria-hidden="true">
          <div className="preview-chrome">
            <span className="hrms-logo-pill">HRMS SUITE</span>
            <span className="hrms-users-online">1,248 ACTIVE EMPLOYEES</span>
          </div>

          <div className="hrms-dashboard-body">
            <div className="hrms-metrics-cards">
              <div className="hrms-card">
                <span className="hrms-card-label">Attendance</span>
                <span className="hrms-card-val">98.4%</span>
              </div>
              <div className="hrms-card">
                <span className="hrms-card-label">KPI Rating</span>
                <span className="hrms-card-val">4.9 / 5</span>
              </div>
            </div>

            <div className="hrms-staff-list">
              <div className="staff-row">
                <span className="staff-avatar av-1">AJ</span>
                <div className="staff-meta">
                  <span className="staff-name">Frontend Engineering</span>
                  <span className="staff-dept">Web Architecture Team</span>
                </div>
                <span className="staff-badge">On Track</span>
              </div>
              <div className="staff-row">
                <span className="staff-avatar av-2">TI</span>
                <div className="staff-meta">
                  <span className="staff-name">Sprint Cycle 44</span>
                  <span className="staff-dept">3+ Enhancements Ready</span>
                </div>
                <span className="staff-badge badge-green">Deployed</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'netflix-clone':
      return (
        <div className="preview-container preview-netflix" aria-hidden="true">
          <div className="netflix-hero-billboard">
            <div className="netflix-brand-tag">N SERIES</div>
            <div className="netflix-movie-title">INTERSTELLAR</div>
            <div className="netflix-movie-tags">98% MATCH • 4K ULTRA HD • 2024</div>
            <div className="netflix-cta-row">
              <span className="netflix-play-btn">▶ Play</span>
              <span className="netflix-info-btn">ⓘ Details</span>
            </div>
          </div>

          <div className="netflix-carousel-strip">
            <div className="netflix-thumb thumb-poster-1"></div>
            <div className="netflix-thumb thumb-poster-2"></div>
            <div className="netflix-thumb thumb-poster-3"></div>
            <div className="netflix-thumb thumb-poster-4"></div>
          </div>
        </div>
      );

    case 'movers-management':
      return (
        <div className="preview-container preview-movers" aria-hidden="true">
          <div className="preview-chrome">
            <span className="movers-badge">LOGISTICS DISPATCH</span>
            <span className="dispatch-id">DISPATCH #TRV-8942</span>
          </div>

          <div className="movers-body">
            <div className="movers-route-box">
              <div className="route-stops">
                <span className="stop-point origin">Kochi Dep</span>
                <span className="route-arrow">➔</span>
                <span className="stop-point transit">Trivandrum Hub</span>
              </div>
              <span className="transit-badge">IN TRANSIT</span>
            </div>

            <div className="movers-metrics-strip">
              <div className="mover-metric">
                <span className="mover-lbl">Cargo Weight</span>
                <span className="mover-val">3,450 KG</span>
              </div>
              <div className="mover-metric">
                <span className="mover-lbl">Invoice Total</span>
                <span className="mover-val text-green">₹ 48,500</span>
              </div>
              <div className="mover-metric">
                <span className="mover-lbl">Status</span>
                <span className="mover-val">Verified</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'school-management':
      return (
        <div className="preview-container preview-school" aria-hidden="true">
          <div className="preview-chrome">
            <span className="school-tag">CAMPUS PORTAL</span>
            <span className="academic-year">TERM II • 2024</span>
          </div>

          <div className="school-body">
            <div className="timetable-preview-grid">
              <div className="timetable-cell cell-active">
                <span className="cell-time">09:00 AM</span>
                <span className="cell-subject">Comp. Science</span>
              </div>
              <div className="timetable-cell">
                <span className="cell-time">11:00 AM</span>
                <span className="cell-subject">Data Structures</span>
              </div>
              <div className="timetable-cell">
                <span className="cell-time">02:00 PM</span>
                <span className="cell-subject">Algorithms Lab</span>
              </div>
            </div>

            <div className="school-bottom-stats">
              <span className="student-metric">Attendance: 97.2%</span>
              <span className="grade-metric">GPA: 3.9 / 4.0</span>
            </div>
          </div>
        </div>
      );

    case 'employee-management':
      return (
        <div className="preview-container preview-employee" aria-hidden="true">
          <div className="preview-chrome">
            <span className="emp-badge">EMPLOYEE DIRECTORY</span>
            <span className="role-chip">RBAC ADMIN</span>
          </div>

          <div className="employee-body">
            <div className="emp-search-mock">
              <span className="search-icon-mock">🔍</span>
              <span className="search-placeholder-mock">Filter by department or role...</span>
            </div>

            <div className="emp-record-list">
              <div className="emp-record-item">
                <span className="emp-avatar">AJ</span>
                <div className="emp-info">
                  <span className="emp-name">AnanduKrishna J</span>
                  <span className="emp-role">Software Engineer • Frontend</span>
                </div>
                <span className="emp-status-dot active">Active</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="preview-container preview-default" aria-hidden="true">
          <div className="default-preview-body">
            <span className="default-title">{title}</span>
          </div>
        </div>
      );
  }
};

export default ProjectPreview;

