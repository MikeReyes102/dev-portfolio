export default function FeedCard({ 
  title, 
  subtitle,
  children,
  actions
}) {
  return (
    <article className="feed-card">

      <header className="feed-card-header">

        <div>
          <h2>{title}</h2>

          {subtitle && (
            <p className="feed-card-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        {actions && (
          <div className="feed-card-actions">
            {actions}
          </div>
        )}

      </header>


      <div className="feed-card-content">
        {children}
      </div>

    </article>
  );
}