"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.56 3.69a9 9 0 0 0 -2.92 1.95"}],["path",{"d":"M3.69 8.56a9 9 0 0 0 -.69 3.44"}],["path",{"d":"M3.69 15.44a9 9 0 0 0 1.95 2.92"}],["path",{"d":"M8.56 20.31a9 9 0 0 0 3.44 .69"}],["path",{"d":"M15.44 20.31a9 9 0 0 0 2.92 -1.95"}],["path",{"d":"M20.31 15.44a9 9 0 0 0 .69 -3.44"}],["path",{"d":"M20.31 8.56a9 9 0 0 0 -1.95 -2.92"}],["path",{"d":"M15.44 3.69a9 9 0 0 0 -3.44 -.69"}],["path",{"d":"M14 14l-4 -4"}],["path",{"d":"M10 14l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[18.22,16.15],"dl":0.2,"st":0.08},{"fx":"pop","n":[8,9],"o":[12,12],"a":0.05}];

export const CircleDashedXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleDashedXIcon.displayName = "CircleDashedXIcon";
