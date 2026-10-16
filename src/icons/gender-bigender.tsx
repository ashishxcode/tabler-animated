"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 11a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M19 3l-5 5"}],["path",{"d":"M15 3h4v4"}],["path",{"d":"M11 16v6"}],["path",{"d":"M8 19h6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,11],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,5.5],[17,5],[11,19],[11,19]]}];

export const GenderBigenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderBigenderIcon.displayName = "GenderBigenderIcon";
