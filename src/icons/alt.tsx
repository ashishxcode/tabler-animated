"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M4 13h4"}],["path",{"d":"M11 8v8h4"}],["path",{"d":"M16 8h4"}],["path",{"d":"M18 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,4],"o":[11,12],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,13],[18,8]]}];

export const AltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AltIcon.displayName = "AltIcon";
