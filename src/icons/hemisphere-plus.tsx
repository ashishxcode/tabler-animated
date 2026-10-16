"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0"}],["path",{"d":"M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.12}];

export const HemispherePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HemispherePlusIcon.displayName = "HemispherePlusIcon";
