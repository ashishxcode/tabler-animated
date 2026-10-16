"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M4 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M9 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M13 12h4"}],["path",{"d":"M9.75 10.25l-2.5 -3.5"}],["path",{"d":"M9.75 13.75l-2.5 3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,5,6],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,12]]}];

export const ModelAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ModelAiIcon.displayName = "ModelAiIcon";
