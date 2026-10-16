"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882"}],["path",{"d":"M6 4h12l-12 0"}],["path",{"d":"M14 10h-1a2 2 0 0 0 -2 2v2c0 1.105 -.395 2 -1.5 2h4.5"}],["path",{"d":"M10 13h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12.5],"a":0.14}];

export const TipJarPoundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TipJarPoundIcon.displayName = "TipJarPoundIcon";
