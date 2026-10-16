"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21l10 -7l-10 -7"}],["path",{"d":"M17 7l-10 7l10 7"}],["path",{"d":"M20 7h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1"}],["path",{"d":"M3 21h18"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const CarLifterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarLifterIcon.displayName = "CarLifterIcon";
