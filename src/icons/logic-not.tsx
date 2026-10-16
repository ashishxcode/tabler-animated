"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-3"}],["path",{"d":"M2 9h3"}],["path",{"d":"M2 15h3"}],["path",{"d":"M5 5l10 7l-10 7l0 -14"}],["path",{"d":"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[10,12],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[20.5,12],[3.5,9],[3.5,15],[17,12]]}];

export const LogicNotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LogicNotIcon.displayName = "LogicNotIcon";
