"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.759 8.759 0 0 1 2.35 -3.652m2.403 -1.589a8.76 8.76 0 0 1 3.572 -.759h3.675"}],["path",{"d":"M20 9v7m0 4v1"}],["path",{"d":"M8 21v-3"}],["path",{"d":"M12 21v-9"}],["path",{"d":"M16 9.5v2.5m0 4v5"}],["path",{"d":"M15 3h5v3h-5l0 -3"}],["path",{"d":"M9.446 5.415l.554 -.415l2 2.5l-.285 .213m-2.268 1.702l-1.447 1.085l-1.8 -.5l-.2 -2l1.139 -.854"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,15],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[20,15],[8,19.5],[12,16.5],[16,15.25],[17.5,4.5],[9,7.75]]}];

export const RollercoasterOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RollercoasterOffIcon.displayName = "RollercoasterOffIcon";
