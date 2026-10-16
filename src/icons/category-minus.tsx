"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4h6v6h-6v-6"}],["path",{"d":"M14 4h6v6h-6v-6"}],["path",{"d":"M4 14h6v6h-6v-6"}],["path",{"d":"M14 17h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[17,17],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const CategoryMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CategoryMinusIcon.displayName = "CategoryMinusIcon";
