export default function Error({
	message,
	status_code,
}: {
	message: string;
	status_code: number;
}) {
	return (
		<div className="absolute left-0 top-0 h-[100dvh] w-[100dvw] bg-blue-800 p-20 flex flex-col gap-16">
			<div className="text-8xl font-serif">( ._.)</div>
			<div className="font-mono flex flex-col gap-6">
				<span className="text-3xl">{message}</span>
				H0P3uH4v3aGR8D4Y
			</div>
		</div>
	);
}
