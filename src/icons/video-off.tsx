"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946"}],["path",{"d":"M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[18,11.97],[9,12]]}];

export const VideoOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VideoOffIcon.displayName = "VideoOffIcon";
