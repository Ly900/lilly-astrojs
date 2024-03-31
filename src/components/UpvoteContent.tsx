import { useState } from 'react';

const MAX_COUNT = 50;

export const UpvoteContent = () => {
	const [upvoteCount, setUpvoteCount] = useState(0);

	return (
		<div className="m-2 flex items-center rounded-md border border-slate-600 p-2">
			<button
				onClick={() => {
					setUpvoteCount((prevCount) =>
						prevCount < MAX_COUNT ? prevCount + 1 : prevCount
					);
				}}
				className="h-[80px] w-[80px] rounded-full border border-gray-500 bg-white p-4 text-center text-sm text-red-400 hover:scale-90 active:bg-slate-800 transition-all hover:text-red-600"
			>
				<svg
					className="upvote__icon relative -top-1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
					/>
				</svg>
			</button>

			<div className="ml-3">
				<div className="-300 mt-2 w-14 rounded-md bg-blue-500 px-2 text-sm text-white">
					React
				</div>

				<div className="pt-2 text-slate-400">{`${upvoteCount} upvotes`}</div>

				<div
					className="h-2 bg-green-600"
					style={{
						width: `${upvoteCount}%`,
					}}
				/>

				{upvoteCount === MAX_COUNT && (
					<div className="mt-2 rounded-md bg-black px-2 text-sm">
						Max upvote reached
					</div>
				)}
			</div>
		</div>
	);
};
