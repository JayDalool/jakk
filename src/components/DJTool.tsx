// DJ.tsx
import React from 'react';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Albums } from "~/components/albums";
import { AlbumArtwork } from './Artwork';

export default function DJ() {
  const handleLightUpClick = (songName: string) => {
    // Handle the light-up logic here
    console.log(`Light up ${songName}`);
  };
  return (
    <main className="h-full px-4 py-6 lg:px-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">  Your personal private DJ.</h2>
      </div>
      <div className="relative">
        <ScrollArea>
          <div className="flex gap-2 space-x-4">
            {Albums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </main>
  );
}