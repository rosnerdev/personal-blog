export function ArticleListItem({ title, summary, link }) {
  return (
    <a href={link}>
        <div className="flex flex-col border-2 border-black rounded-lg p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{summary}</p>
        </div>
    </a>
  );
}
