"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 2h5v4h-5l0 -4"}],["path",{"d":"M15 10h5v4h-5l0 -4"}],["path",{"d":"M5 18h5v4h-5l0 -4"}],["path",{"d":"M5 10h5v4h-5l0 -4"}],["path",{"d":"M10 12h5"}],["path",{"d":"M7.5 6v4"}],["path",{"d":"M7.5 14v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.5,8],[7.5,16]]}];

export const SchemaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SchemaIcon.displayName = "SchemaIcon";
