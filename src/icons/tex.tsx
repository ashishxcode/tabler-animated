"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 8v-1h-6v1"}],["path",{"d":"M6 15v-8"}],["path",{"d":"M21 15l-5 -8"}],["path",{"d":"M16 15l5 -8"}],["path",{"d":"M14 11h-4v8h4"}],["path",{"d":"M10 15h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[6,7.5],"st":0.07},{"fx":"pop","n":[1,2,3,4],"o":[13.5,13],"a":0.04}];

export const TexIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TexIcon.displayName = "TexIcon";
