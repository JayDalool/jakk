import React from 'react';
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { AlbumArtwork } from "~/components/Artwork";
import { Albums } from "~/components/albums";
import SearchBar from "@/components/search-bar";
import { Button } from './ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    
    <main className="h-full px-4 py-12 lg:px-8 relative">

        <div className="absolute top-10 right-12">
        <Button className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <Link href="/dj">DJ</Link>
        </Button>
      </div>
      {/* SearchBar above the album section */}
      <div className="absolute top-4 left-8">
        <SearchBar />
      </div>

      <div className="space-y-4 mt-16"> 
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <p className="text-muted-foreground text-sm">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
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
