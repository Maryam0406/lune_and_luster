import './AnnouncementBar.css';

const messages = [
    'Your Story, beautifully personalized',
    'Personalised treasures to keep forever'
];

export default function AnnouncementBar() {
    const loop = [...messages, ...messages, ...messages, ...messages];
    return (
        <div className="announce">
            < div className="announce-track">
                {loop.map((m, i) => <span key={i}>{m}</span>)}
            </div>
        </div>
    );
}    