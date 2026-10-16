"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.628 12.076a6.653 6.653 0 0 0 -.564 -1.199l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546c1.7 1.375 3.906 1.852 5.958 1.431"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"hop","n":[0],"o":[11.81,21],"d":[0,-1.8]}];

export const DropletBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DropletBoltIcon.displayName = "DropletBoltIcon";
