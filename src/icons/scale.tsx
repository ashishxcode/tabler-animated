"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 20l10 0"}],["path",{"d":"M6 6l6 -1l6 1"}],["path",{"d":"M12 3l0 17"}],["path",{"d":"M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"}],["path",{"d":"M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,5.5],[6,10.5],[18,10.5]]}];

export const ScaleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScaleIcon.displayName = "ScaleIcon";
