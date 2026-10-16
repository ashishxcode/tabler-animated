"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16h.013"}],["path",{"d":"M12.01 16h.005"}],["path",{"d":"M16.015 16h.005"}],["path",{"d":"M16.015 12h.005"}],["path",{"d":"M8.01 12h.005"}],["path",{"d":"M12.01 12h.005"}],["path",{"d":"M16.02 8h.005"}],["path",{"d":"M8.015 8h.005"}],["path",{"d":"M12.015 8h.005"}],["path",{"d":"M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1"}],["path",{"d":"M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[9,10],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.01,16],[12.01,16],[16.02,16],[16.02,12],[8.01,12],[12.01,12],[16.02,8],[8.02,8],[12.02,8]]}];

export const MatrixIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MatrixIcon.displayName = "MatrixIcon";
