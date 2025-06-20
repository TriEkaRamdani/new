import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const fid = req.body?.untrustedData?.fid;
  const isWinner = Math.random() > 0.5;

  const image = isWinner
    ? "/assets/candy.png"
    : "/assets/zonk.png";

  const message = isWinner ? "🍬 Dapat Permen!" : "😵 Zonk!";

  res.status(200).json({
    frames: [
      {
        version: "vNext",
        image,
        buttons: [
          { label: message },
        ],
      },
    ],
  });
}
