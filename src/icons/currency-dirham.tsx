"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.5 19h-3.5"}],["path",{"d":"M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521"}],["path",{"d":"M7 4v9"}],["path",{"d":"M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744"}],["path",{"d":"M11 13.01v-.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[11.69,11.5],"a":0.14}];

export const CurrencyDirhamIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyDirhamIcon.displayName = "CurrencyDirhamIcon";
