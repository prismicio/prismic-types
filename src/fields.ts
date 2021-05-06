export interface RichTextSpan {
	start: number;
	end: number;
	type: string;
	text: string;
}

export interface RichTextBlock {
	type: string;
	text: string;
	spans: RichTextSpan[];
}

export type RichTextField = RichTextBlock[];
