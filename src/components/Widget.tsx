interface WidgetProps {
  title: string;
}

export function Widget({ title }: WidgetProps) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2">Widget content here</div>
    </div>
  );
}