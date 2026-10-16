"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 19h4"}],["path",{"d":"M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -2v-9a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[19,19],"a":0.22,"dl":0.1}];

export const ScriptMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScriptMinusIcon.displayName = "ScriptMinusIcon";
