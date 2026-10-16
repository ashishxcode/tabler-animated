"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 14a3 3 0 1 0 3 3"}],["path",{"d":"M17 13v-9h4"}],["path",{"d":"M13 5h-4m-4 0h-2"}],["path",{"d":"M3 9h6"}],["path",{"d":"M9 13h-6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"slide","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0],"st":0.07}];

export const PlaylistOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaylistOffIcon.displayName = "PlaylistOffIcon";
