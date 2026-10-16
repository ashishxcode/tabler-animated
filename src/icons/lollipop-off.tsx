"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915"}],["path",{"d":"M21 10a3.5 3.5 0 0 0 -7 0"}],["path",{"d":"M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715"}],["path",{"d":"M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5"}],["path",{"d":"M14 3a3.5 3.5 0 0 0 -3.5 3.5"}],["path",{"d":"M3 21l6 -6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[15.75,13.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[14,10],"a":0.06},{"fx":"pop","n":[1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,8.25],[9.85,11.75],[12.25,4.75],[6,18]]}];

export const LollipopOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LollipopOffIcon.displayName = "LollipopOffIcon";
