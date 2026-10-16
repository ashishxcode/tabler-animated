"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 8v8"}],["path",{"d":"M18 16v-8"}],["path",{"d":"M8 6h8"}],["path",{"d":"M16 18h-8"}]];
const rig: Rig[] = [{"fx":"swing","n":[4,5,6,7],"o":[12,7],"a":12},{"fx":"tilt","n":[0,1,2,3],"o":[12,5],"a":7,"dl":0.07}];

export const TopologyRing3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyRing3Icon.displayName = "TopologyRing3Icon";
