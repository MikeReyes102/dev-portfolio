export default function FeedCard({ title, children }) {
  return (
    <article className="feed-card">

      {title && (
        <h2>
          {title}
        </h2>
      )}

      <div className="feed-card-content">
        {children}
      </div>

    </article>
  );
}