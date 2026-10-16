"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1"}],["path",{"d":"M10 14h4"}],["path",{"d":"M12 12v4"}],["path",{"d":"M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12,14],[12,5]]}];

export const MedicineSyrupIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MedicineSyrupIcon.displayName = "MedicineSyrupIcon";
