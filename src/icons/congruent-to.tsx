"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13h14"}],["path",{"d":"M5 17h14"}],["path",{"d":"M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,11.5],"a":0.06}];

export const CongruentToIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CongruentToIcon.displayName = "CongruentToIcon";
