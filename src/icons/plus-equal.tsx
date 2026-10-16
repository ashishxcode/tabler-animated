"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7h6"}],["path",{"d":"M7 4v6"}],["path",{"d":"M20 16h-6"}],["path",{"d":"M20 19h-6"}],["path",{"d":"M5 19l14 -14"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,7],[7,7],[17,16],[17,19]]}];

export const PlusEqualIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlusEqualIcon.displayName = "PlusEqualIcon";
