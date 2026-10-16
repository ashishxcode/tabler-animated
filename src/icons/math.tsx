"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 5h-7l-4 14l-3 -6h-2"}],["path",{"d":"M14 13l6 6"}],["path",{"d":"M14 19l6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,16],[17,16]]}];

export const MathIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathIcon.displayName = "MathIcon";
