"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8h-14"}],["path",{"d":"M5 12h7"}],["path",{"d":"M12 16h-7"}],["path",{"d":"M16 14l4 4"}],["path",{"d":"M20 14l-4 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[18,16],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0],"st":0.07}];

export const PlaylistXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaylistXIcon.displayName = "PlaylistXIcon";
