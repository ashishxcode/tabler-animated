"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 18h10"}],["path",{"d":"M18 16l-5 -8"}],["path",{"d":"M11 8l-5 8"}]];
const rig: Rig[] = [{"fx":"swing","n":[3,4,5],"o":[12,9],"a":12},{"fx":"tilt","n":[0,1,2],"o":[12,5],"a":7,"dl":0.07}];

export const TopologyRing2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyRing2Icon.displayName = "TopologyRing2Icon";
