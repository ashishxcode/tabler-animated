"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251"}],["path",{"d":"M9 15l-4.5 4.5"}],["path",{"d":"M14.5 4l5.5 5.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"hop","n":[1,2,3],"o":[12.25,19.5],"d":[0,-2.2]}];

export const PinnedOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PinnedOffIcon.displayName = "PinnedOffIcon";
