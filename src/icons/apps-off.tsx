"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704a1 1 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706"}],["path",{"d":"M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704a1 1 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706"}],["path",{"d":"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M14 7h6"}],["path",{"d":"M17 4v6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[17,17],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2,3,4],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const AppsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AppsOffIcon.displayName = "AppsOffIcon";
