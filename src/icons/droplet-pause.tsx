"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.952 13.456a6.573 6.573 0 0 0 -.888 -2.579l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.176 7.176 0 0 0 5.517 1.507"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0],"o":[11.98,21],"d":[0,-1.8]}];

export const DropletPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DropletPauseIcon.displayName = "DropletPauseIcon";
