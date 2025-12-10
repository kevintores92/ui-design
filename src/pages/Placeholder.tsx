export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex-1 flex items-center justify-center p-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-display text-muted-foreground/20">{title}</h1>
        <p className="text-muted-foreground">This page is currently under construction.</p>
      </div>
    </div>
  );
}
