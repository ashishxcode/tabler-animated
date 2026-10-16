"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2"}],["path",{"d":"M9 17v1a3 3 0 0 0 4.194 2.753"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"swing","n":[0],"o":[11,4],"a":12},{"fx":"tilt","n":[1],"o":[11.1,18],"a":7,"dl":0.07}];

export const BellXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellXIcon.displayName = "BellXIcon";
