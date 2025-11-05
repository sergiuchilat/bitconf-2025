const fs = require('fs');
const path = require('path');

// Schedule data
const scheduleSlots = [
  { time: '9:45 - 10:15', events: [{ title: 'Registration & Coffee', speaker: '', type: 'break', duration: '30 min' }] },
  { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Natalia Gaşiţoi, Alecu Russo Balti State University, Rector', type: 'keynote', duration: '15 min' }] },
  {
    time: '10:30 - 11:00 / 10:30 - 12:30',
    events: [
      {
        title: 'Chasing the AI Hype: A Senior Developer\'s Perspective.',
        speaker: 'Roman Fiodorov (Founder Filosoft Company, Tech-Lead at Aiomed.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      },
      {
        title: 'Bug Hunting – how a QA thinks',
        speaker: 'Cristina Volontir, Marina Zubcu, Cristina Grosu (Orange Systems)',
        type: 'workshop',
        track: 'workshops',
        duration: '2 hours'
      }
    ]
  },
  {
    time: '11:00 - 11:30',
    events: [
      {
        title: 'Pitch It. Scope It. Deliver It. How to sell ambitiously and deliver delight by design',
        speaker: 'Radu Tataru (Delivery Director SER Region, Amdaris)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '11:30 - 12:00',
    events: [
      {
        title: 'Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.',
        speaker: 'Radu Dumbraveanu (Tech Leader at AmSoft)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '12:00 - 12:30',
    events: [
      {
        title: 'I Logged Out: What Happens After You Leave IT?',
        speaker: 'Diana Lari (Former Product Owner)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  { time: '12:30 - 13:15', events: [{ title: 'Lunch', speaker: '', type: 'break', duration: '45 min' }] },
  {
    time: '13:15 - 14:30 / 13:15 - 15:15',
    events: [
      {
        title: 'Tech Movers: From Ideas to Startups',
        speaker: 'Petru Maleru (General Manager at ARA), Veronica Covali (Co-Founder at stilio.md), Pavel Curcovici (Tekwill Balti Administrator)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '14:30 - 15:00',
    events: [
      {
        title: 'How to test an API in the era of AI',
        speaker: 'Eugen Zagorcea (Principal QA Engineer, flow48.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '15:00 - 15:30',
    events: [
      {
        title: 'From Code to Impact: How to Bring Value Beyond Code',
        speaker: 'Adrian Romanov (Full-stack Software Engineer at Cegeka)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '15:30 - 16:00',
    events: [
      {
        title: 'Balancing AI and Traditional Methods in IT: From Academia to Industry',
        speaker: 'Sergiu Chilat (DevOps at Adtelligent)',
        type: 'presentation',
        duration: '30 min'
      }
    ]
  },
  {
    time: '16:00 - 16:15',
    events: [{ title: 'Closing Keynote / Panel Discussion', speaker: '', type: 'keynote', duration: '15 min' }]
  },
  { time: '16:15 - 17:00', events: [{ title: 'Conference Ends', speaker: 'Networking', type: 'networking', duration: '45 min' }] }
];

// Generate HTML for PDF
function generateHTML() {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BIT Conference 2025 - Schedule</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      padding: 15px 20px;
      background: white;
      color: #000;
      font-size: 14px;
    }
    
    .header {
      text-align: center;
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 2px solid #3b82f6;
    }
    
    .header h1 {
      font-size: 24px;
      margin-bottom: 3px;
      color: #1e293b;
    }
    
    .header .date {
      font-size: 14px;
      color: #64748b;
      margin-top: 3px;
    }
    
    .schedule-slot {
      margin-bottom: 8px;
      page-break-inside: avoid;
    }
    
    .time {
      font-size: 15px;
      font-weight: bold;
      color: #3b82f6;
      margin-bottom: 4px;
      padding-bottom: 3px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .event {
      margin-bottom: 4px;
      padding: 6px 8px;
      border-left: 2px solid #10b981;
      background: #f8fafc;
    }
    
    .event.keynote {
      border-left-color: #3b82f6;
    }
    
    .event.workshop {
      border-left-color: #10b981;
    }
    
    .event.break {
      border-left-color: #94a3b8;
      background: #f1f5f9;
    }
    
    .event-content {
      font-size: 14px;
      color: #1e293b;
      line-height: 1.3;
    }
    
    .event-content strong {
      color: #3b82f6;
      font-weight: bold;
    }
    
    .parallel-sessions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    
    .track-header {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 4px;
      padding: 3px 4px;
      background: #e2e8f0;
      text-align: center;
      border-radius: 2px;
    }
    
    @media print {
      @page {
        size: A4;
        margin: 8mm;
      }
      
      body {
        padding: 0;
        margin: 0;
      }
      
      .schedule-slot {
        page-break-inside: avoid;
      }
      
      .header {
        margin-bottom: 6px;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>BIT Conference 2025</h1>
    <div class="date">November 8, 2025 | Nortek Center, Bălți</div>
  </div>
  
  <div class="schedule">
`;

  scheduleSlots.forEach(slot => {
    html += `    <div class="schedule-slot">\n`;
    html += `      <div class="time">${slot.time}</div>\n`;
    
    const hasParallelTracks = slot.events.some(e => e.track === 'presentations') && slot.events.some(e => e.track === 'workshops');
    
    if (hasParallelTracks) {
      html += `      <div class="parallel-sessions">\n`;
      
      // Presentations track
      html += `        <div>\n`;
      html += `          <div class="track-header">Presentations Track</div>\n`;
      slot.events.filter(e => e.track === 'presentations').forEach(event => {
        html += generateEventHTML(event);
      });
      html += `        </div>\n`;
      
      // Workshops track
      html += `        <div>\n`;
      html += `          <div class="track-header">Workshops Track</div>\n`;
      slot.events.filter(e => e.track === 'workshops').forEach(event => {
        html += generateEventHTML(event);
      });
      html += `        </div>\n`;
      
      html += `      </div>\n`;
    } else {
      slot.events.forEach(event => {
        html += generateEventHTML(event);
      });
    }
    
    html += `    </div>\n`;
  });

  html += `
  </div>
</body>
</html>
`;
  
  return html;
}

function generateEventHTML(event) {
  const eventClass = event.type === 'keynote' ? 'event keynote' : 
                     event.type === 'workshop' ? 'event workshop' :
                     event.type === 'break' ? 'event break' : 'event';
  
  let html = `        <div class="${eventClass}">\n`;
  
  // Build the prefix with track and duration
  let prefix = '';
  if (event.track) {
    prefix = event.track.toUpperCase();
  }
  if (event.duration) {
    prefix += (prefix ? ' ' : '') + event.duration;
  }
  
  // Single line format: PREFIX - Title - Speaker
  let content = '';
  if (prefix) {
    content += `<strong>${prefix}</strong> - `;
  }
  content += event.title;
  if (event.speaker) {
    content += ` - <strong>${event.speaker}</strong>`;
  }
  
  html += `          <div class="event-content">${content}</div>\n`;
  html += `        </div>\n`;
  
  return html;
}

// Generate and save HTML
const html = generateHTML();
const outputPath = path.join(__dirname, '..', 'public', 'schedule.html');
fs.writeFileSync(outputPath, html);

console.log('✅ Schedule HTML generated successfully!');
console.log(`📄 File saved to: ${outputPath}`);
console.log('\n📋 To convert to PDF:');
console.log('   1. Open the file in a browser: http://localhost:3000/schedule.html');
console.log('   2. Use browser\'s Print function (Cmd/Ctrl + P)');
console.log('   3. Select "Save as PDF"');

