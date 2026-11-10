import { NextResponse } from 'next/server';
import * as fal from '@fal-ai/serverless-client';

fal.config({
  credentials: process.env.FAL_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Промпт не указан' }, { status: 400 });
    }

    // Вызов нейросети Fal.ai (модель Kling AI)
    const result: any = await fal.subscribe('fal-ai/kling-video/v1/standard/text-to-video', {
      input: { prompt },
      logs: true,
    });

    return NextResponse.json({ videoUrl: result.video?.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Ошибка генерации' }, { status: 500 });
  }
}
