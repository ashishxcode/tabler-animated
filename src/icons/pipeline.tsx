"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4h8"}],["path",{"d":"M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4"}],["path",{"d":"M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5"}],["path",{"d":"M13 20h8"}],["path",{"d":"M12 9v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,4],[17,20],[12,12]]}];

export const PipelineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PipelineIcon.displayName = "PipelineIcon";
