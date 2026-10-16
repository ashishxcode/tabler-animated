"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.967 13.594a6.568 6.568 0 0 0 -.903 -2.717l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.125 7.125 0 0 0 4.04 1.565"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0],"o":[11.98,20.99],"d":[0,-1.8]}];

export const DropletCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DropletCheckIcon.displayName = "DropletCheckIcon";
