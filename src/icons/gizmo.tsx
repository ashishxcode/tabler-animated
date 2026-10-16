"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 19l-8 -5.5l-8 5.5"}],["path",{"d":"M12 4v9.5"}],["path",{"d":"M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M19 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16.25],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8.75],[12,4],[4,19],[20,19]]}];

export const GizmoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GizmoIcon.displayName = "GizmoIcon";
