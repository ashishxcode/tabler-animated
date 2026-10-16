"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127"}],["path",{"d":"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1],"o":[12,21],"d":[0,-1.8]}];

export const HomeShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeShareIcon.displayName = "HomeShareIcon";
