import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px] ">
      <Button> Default</Button>
      <Button variant="primary"> Primary</Button>
      <Button variant="primaryOutline"> Primary Outline</Button>
      <Button variant="secondary"> Secondary</Button>
      <Button variant="secondaryOutline"> Secondary Outline</Button>
      <Button variant="dander"> dander</Button>
      <Button variant="danderOutline"> dander Outline</Button>
      <Button variant="super"> super</Button>
      <Button variant="superOutline"> super outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar Outline</Button>
    </div>
  );
}
